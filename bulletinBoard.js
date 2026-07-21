import { html, playhtml, repeat } from 'https://unpkg.com/playhtml@latest'

// { name: 'FarmerJohn', message: 'hello!', at: Date.now() }

playhtml.register('bulletin-board-test', {
  // a growing list of entries, each: { name, message, at }
  defaultData: { entries: [] },
  view: ({ data, setData }) => {
    const sign = (event) => {
      const form = event.target;
      const input = form.querySelector('input');
      const message = input.value.trim();
      if (!message) return;
      setData((draft) => {
        draft.entries.push({
          name: window.cursors.name || 'AnonymousFarmer',
          message,
          at: Date.now(),
        });
      });
      input.value = '';
    };

    return html`
      <h4>Bulletin Board</h4>
      <div>
      <div id="scroller">
      <ul>
        ${repeat(
          [...data.entries],
          (entry) => html`
            <li>
              <b>${entry.name}</b>: ${entry.message}
            </li>
          `,
        )}
      </ul>
      </div>
      <form @submit=${sign}>
        <input placeholder="Post to the Bulletin Board!" />
        <button type="submit">Pin</button>
      </form>
      </div>
    `;
  },
});
