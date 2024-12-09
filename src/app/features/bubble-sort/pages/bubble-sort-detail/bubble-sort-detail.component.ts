import { Component } from '@angular/core';
import { BubbleSortStepperComponent } from '../../components/bubble-sort-stepper/bubble-sort-stepper.component';
import { BubbleSortVisualizerComponent } from '../../components/bubble-sort-visualizer/bubble-sort-visualizer.component';
import { Detail } from '../../../../shared/models/detail';
import { DetailComponent } from '../../../../shared/components/detail/detail.component';

@Component({
  selector: 'app-bubble-sort-detail',
  imports: [
    DetailComponent,
    BubbleSortStepperComponent,
    BubbleSortVisualizerComponent,
  ],
  templateUrl: './bubble-sort-detail.component.html',
  styleUrl: './bubble-sort-detail.component.css',
})
export class BubbleSortDetailComponent {
  detail: Detail = {
    title: 'Bubble Sort',
    description:
      'Bubble Sort ใช้หลักการเปรียบเทียบและสลับตำแหน่งของข้อมูลในอาร์เรย์ โดยทำการเปรียบเทียบคู่ที่อยู่ติดกันและสลับตำแหน่งหากข้อมูลในตำแหน่งแรกมีค่ามากกว่าตำแหน่งถัดไป กระบวนการนี้จะทำซ้ำไปเรื่อย ๆ จนกว่าลำดับข้อมูลทั้งหมดจะถูกจัดเรียงเรียบร้อย',
    complexity: {
      time: {
        average: 'O(n^2)',
        worst: 'O(n^2)',
        best: 'O(n)',
        description:
          'Bubble Sort ใช้เวลามากที่สุดเมื่อข้อมูลเรียงย้อนกลับ นั่นคือ จะมีการสลับค่าในทุกครั้งที่เปรียบเทียบค่า เพื่อนำค่าที่มากที่สุด (ซึ่งอยู่ตัวแรกสุด) สลับค่าอื่น ๆ จนไปถึงตำแหน่งสุดท้าย และทำซ้ำ ๆ กับค่ารองลงมา และใช้เวลาน้อยที่สุดเมื่อข้อมูลเรียงมาก่อนแล้ว โดยมีการตรวจสอบเพียงรอบเดียว ว่าข้อมูลได้ถูกสลับค่าบ้างหรือไม่ ในรอบนี้ (ไม่มีการสลับค่าในหนึ่งรอบ แปลว่าแต่ละค่าอยู่ในตำแหน่งที่ถูกต้องแล้ว)',
      },
      space: {
        average: 'O(1)',
        worst: 'O(1)',
        best: 'O(1)',
        description:
          'Bubble Sort ใช้พื้นที่เล็กน้อยในการเรียง เช่น ตัวแปรเก็บค่าความยาวอาร์เรย์ หรือ Flag สำหรับตรวจสอบการสลับค่าในรอบ',
      },
    },
    pros: ['ง่ายต่อการทำความเข้าใจและใช้งาน', 'ใช้พื้นที่หน่วยความจำคงที่'],
    cons: [
      'ความเร็วต่ำเมื่อเทียบกับอัลกอริทึมอื่น',
      'ไม่เหมาะกับข้อมูลขนาดใหญ่ (เวลาที่ใช้แปรผันตรงกับขนาดข้อมูล)',
    ],
  };
}
