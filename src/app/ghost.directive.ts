import {
  Directive,
  ElementRef,
  Renderer2,
  TemplateRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[Ghost]',
})
export class GhostDirective implements OnInit, OnChanges {
  //   @Input('Ghost') set ghost(isShow: boolean | null) {
  //     if (isShow === null) this.render.addClass(this.el.nativeElement, 'ghost');
  //     else
  //       Boolean(isShow)
  //         ? this.render.addClass(this.el.nativeElement, 'ghost')
  //         : this.render.removeClass(this.el.nativeElement, 'ghost');
  //   }
  @Input('Ghost') ghost: boolean | null = true;
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnChanges(v: SimpleChanges) {
    // console.log(v['ghost'].firstChange);
    Boolean(v['ghost'].currentValue)
      ? this.render.addClass(this.el.nativeElement, 'ghost')
      : this.render.removeClass(this.el.nativeElement, 'ghost');
  }
  ngOnInit() {}
}
