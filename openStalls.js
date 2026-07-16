import { html, playhtml, repeat } from "https://unpkg.com/playhtml@latest"

// open stalls when someone is manning them
const stall = document.getElementById('stall-1-1')
stall.defaultData = {}
stall.myDefaultAwareness = { hovering: false }
stall.updateElement = () => {}

stall.onMount = ({ getElement, setMyAwareness }) => {
  const el = getElement();
  el.addEventListener('mouseenter', () => setMyAwareness({ hovering: true }));
  el.addEventListener('mouseleave', () =>
    setMyAwareness({ hovering: false }),
  );
};

console.log(stall.myDefaultAwareness.hovering)
