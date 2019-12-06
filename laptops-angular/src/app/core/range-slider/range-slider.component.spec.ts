import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderComponent } from './range-slider.component';
describe('RangeSliderComponent', () => {
  let component: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeSliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    component.minInputValue = 0;
    component.maxInputValue = 1000;
    fixture.detectChanges();
    component.range = fixture.nativeElement.querySelector('#range');
    component.knob = fixture.nativeElement.querySelector('#knob');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onKnobOneDrag', () => {
    it('should emit minValueChanged 0, maxValueChanged 1000, if movedDistanceInPixel is lesser than 0', () => {
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobOneDrag(-10);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });

    it('should emit minValueChanged 0, maxValueChanged 1000, if movedDistanceInPixel is 0', () => {
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobOneDrag(0);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });

    it('should emit minValueChanged 1000, maxValueChanged 1000, if movedDistanceInPixel is equal to boundryWidth', () => {
      const boundryWidth = component.rangeWidth - component.knobWidth;
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobOneDrag(boundryWidth);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(1000);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });

    it('should emit minValueChanged 1000, maxValueChanged 1000, if movedDistanceInPixel is greater than boundryWidth', () => {
      const boundryWidth = component.rangeWidth - component.knobWidth;
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobOneDrag(boundryWidth + 1000);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(1000);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });

  });

  describe('onKnobTwoDrag', () => {
    it('should emit minValueChanged 0, maxValueChanged 1000, if movedDistanceInPixel is greater than 0', () => {
      // movedDistanceInPixel is negative if the knobTwo was dragged from the right side to the left side
      // it is opposite of onKnobOneDrag
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(10);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });
    /*
    it('should emit minValueChanged 0, maxValueChanged 1000, if movedDistanceInPixel is 0', () => {
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(0);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    }); */

    it('should emit minValueChanged 0, maxValueChanged 0, if movedDistanceInPixel is equal to boundryWidth', () => {
      const boundryWidth = component.rangeWidth - component.knobWidth;
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(-boundryWidth);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(0);
    });

    it('should emit minValueChanged 0, maxValueChanged 0, if movedDistanceInPixel is greater than boundryWidth', () => {
      const boundryWidth = component.rangeWidth - component.knobWidth;
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(-boundryWidth - 1000);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(0);
    });

    /*
      it('should emit minValueChanged 0, maxValueChanged 500, if movedDistanceInPixel is half of boundryWidth', () => {
      const boundryWidth = Math.ceil((component.rangeWidth - component.knobWidth) / 2);
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(-boundryWidth);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(500);
    }); */
  });

  describe('#onKnobOneDrag and #onKnobTwoDrag have been called', () => {
    it('should emit minValueChanged 0, maxValueChanged 0, if both knob have been dragged with less than its starting boundry', () => {
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobOneDrag(-100);
      component.onKnobTwotDrag(100);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });

    it('should emit minValueChanged 0, maxValueChanged 1000, if both knob have been dragged with full boundryWidth', () => {
      const boundryWidth = component.rangeWidth - component.knobWidth;
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(-boundryWidth);
      component.onKnobOneDrag(boundryWidth);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });

    it('should emit minValueChanged 0, maxValueChanged 1000, if both knob have been dragged with over full boundryWidth', () => {
      const boundryWidth = component.rangeWidth - component.knobWidth;
      spyOn(component.minValueChanged, 'emit');
      spyOn(component.maxValueChanged, 'emit');

      component.onKnobTwotDrag(-boundryWidth - 1000);
      component.onKnobOneDrag(boundryWidth + 1000);

      expect(component.minValueChanged.emit).toHaveBeenCalledWith(0);
      expect(component.maxValueChanged.emit).toHaveBeenCalledWith(1000);
    });
  });
});
