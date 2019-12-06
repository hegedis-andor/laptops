import { state, trigger, style, transition, animate, keyframes } from '@angular/animations';

export const checkingAnimation = trigger('checking', [
  transition('unChecked => checked', [
    animate(
      '0.25s ease-out',
      keyframes([
        style({
          boxShadow: '0 0 0 0.1rem rgba(255, 215, 64, 0.2)',
          offset: 0
        }),
        style({
          boxShadow: '0 0 0 0.2rem rgba(255, 215, 64, 0.35)',
          offset: 0.5
        }),
        style({
          boxShadow: '0 0 0 0.4rem rgba(255, 215, 64, 0.5)',
          offset: 1
        })
      ])
    )
  ]),
  transition('checked => unChecked', [
    animate(
      '0.2s ease-out',
      keyframes([
        style({
          boxShadow: '0 0 0 0.1rem rgba(0, 0, 0, 0.1)',
          offset: 0
        }),
        style({
          boxShadow: '0 0 0 0.2rem rgba(0, 0, 0, 0.14)',
          offset: 0.5
        }),
        style({
          boxShadow: '0 0 0 0.4rem rgba(0, 0, 0, 0.15)',
          offset: 1
        })
      ])
    )
  ])
]);
