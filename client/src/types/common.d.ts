// src/styles.d.ts or src/custom.d.ts
declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}