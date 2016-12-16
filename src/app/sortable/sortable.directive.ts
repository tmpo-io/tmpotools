import {
  NgModule, Directive, Input, ElementRef, Output,
  Renderer, OnInit, HostListener, EventEmitter
} from '@angular/core';

export interface SortResult {
  from: number;
  to: number;
}

export function applySort<T>(items: T[], res: SortResult): T[] {
  let temp = items[res.from];
  let ite = [
    ...items.slice(0, res.from),
    ...items.slice(res.from + 1)
  ];
  return [
    ...ite.slice(0, res.to),
    temp,
    ...ite.slice(res.to)
  ];
}


@Directive({
  selector: '[tmpoSortable]'
})
export class SortableDirective implements OnInit {

  @Input() tmpoSortable: number;
  @Input() dragEnterClass: string = 'dragEnter';
  @Output() sorted = new EventEmitter<SortResult>();

  constructor(
    private el: ElementRef,
    private rend: Renderer) { }

  ngOnInit() {
    this.rend.setElementProperty(
      this.el.nativeElement, 'draggable', true);
    // console.log('el', this.tmpoSortable);
  }

  @HostListener('dragstart', ['$event'])
  dragStart(e) {
    e.dataTransfer.setData('text', '' + this.tmpoSortable);
    e.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  drag(e) {
    e.preventDefault();
  }

  @HostListener('dragend', ['$event'])
  dragEnd(e) {
    return false;
  }

  // This event must exist to make working ie11
  @HostListener('dragenter', ['$event'])
  dragEnter(e) {
    this.addClass();
    e.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  dragLeave(e) {
    this.removeClass();
  }

  // This event must exist for element be a drop zone.
  @HostListener('dragover', ['$event'])
  dragOver(e) {
    return false;
  }

  @HostListener('drop', ['$event'])
  drop(e) {
    this.removeClass();
    let which = parseInt(e.dataTransfer.getData('text'), 10);
    this.sorted.next({ from: which, to: this.tmpoSortable });
    e.preventDefault();
    e.stopPropagation();
  }

  private addClass() {
    this.rend.setElementClass(this.el.nativeElement, this.dragEnterClass, true);
  }

  private removeClass() {
    this.rend.setElementClass(this.el.nativeElement, this.dragEnterClass, false);
  }


}


@NgModule({
  declarations: [SortableDirective],
  exports: [SortableDirective]
})
export class TmpoSortableModule {}

