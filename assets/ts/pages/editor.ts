
import { Crepe } from '@milkdown/crepe';
// import "@milkdown/crepe/theme/common/style.css";

const crepe = new Crepe({
    root: document.getElementById('editor'),
    defaultValue: 'Hello, Milkdown!',
});

crepe.create().then(() => {
    console.log('Editor created');
});