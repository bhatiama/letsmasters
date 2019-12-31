import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

export let slideIn = trigger('slideIn', [
  transition('* => *', [
    query('.timeline:nth-child(odd)', style({ opacity: 0, transform: 'translateX(-100px)'})),
    query('.timeline:nth-child(even)', style({ opacity: 0, transform: 'translateX(100px)'})),
    query('.timeline:nth-child(odd), .timeline:nth-child(even)', stagger(200, [
      animate(2000, style({ opacity: 1, transform: 'translateX(0)'}))
    ]), { optional: true })
  ])
]);
