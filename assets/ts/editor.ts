import { defaultValueCtx, Editor, rootCtx } from '@milkdown/kit/core';
import { commonmark } from '@milkdown/kit/preset/commonmark';

const markdown =
    `# Milkdown Vanilla Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vanilla Typescript**.`;

console.log('yeet');

console.log(document.querySelector('no existo')!.textContent);

Editor
    .make()
    .config(ctx => {
        ctx.set(rootCtx, '#editor')
        ctx.set(defaultValueCtx, markdown)
    })
    .use(commonmark)
    .create()