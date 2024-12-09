import { Component } from '@angular/core';
import { InsertionSortStepperComponent } from '../../components/insertion-sort-stepper/insertion-sort-stepper.component';
import { InsertionSortVisualizerComponent } from '../../components/insertion-sort-visualizer/insertion-sort-visualizer.component';
import { Detail } from '../../../../shared/models/detail';
import { DetailComponent } from '../../../../shared/components/detail/detail.component';

@Component({
  selector: 'app-insertion-sort-detail',
  imports: [
    DetailComponent,
    InsertionSortStepperComponent,
    InsertionSortVisualizerComponent,
  ],
  templateUrl: './insertion-sort-detail.component.html',
  styleUrl: './insertion-sort-detail.component.css',
})
export class InsertionSortDetailComponent {
  detail: Detail = {
    title: 'Insertion Sort',
    description:
      'Insertion Sort ใช้แนวคิดคล้ายกับการจัดเรียงไพ่ในมือ โดยอัลกอริธึมจะดำเนินการโดยการแบ่งข้อมูลออกเป็นสองส่วน คือส่วนที่เรียงลำดับแล้วและส่วนที่ยังไม่ได้เรียงลำดับ จากนั้นนำค่าจากส่วนที่ยังไม่ได้เรียงลำดับมาแทรกในตำแหน่งที่เหมาะสมในส่วนที่เรียงลำดับแล้ว กระบวนการนี้ทำซ้ำจนกระทั่งข้อมูลทั้งหมดอยู่ในส่วนที่เรียงลำดับแล้ว',
    complexity: {
      time: {
        average: 'O(n^2)',
        worst: 'O(n^2)',
        best: 'O(n)',
        description:
          'Insertion Sort ใช้เวลามากที่สุดเมื่อข้อมูลเรียงย้อนกลับ นั่นคือ จะมีการแทรกค่าที่น้อยกว่าในทุกรอบ ทำให้มีการขยับตำแหน่งข้อมูลทุกครั้ง และใช้เวลาน้อยที่สุดเมื่อข้อมูลเรียงมาก่อนแล้ว โดยมีเพียงการวนในรอบใหญ่ ไม่มีการวนในรอบย่อย (รอบย่อยจะเกิดขึ้น เมื่อมีข้อมูลทางซ้ายอย่างน้อยหนึ่งค่า มากกว่าข้อมูลปัจจุบัน)',
      },
      space: {
        average: 'O(1)',
        worst: 'O(1)',
        best: 'O(1)',
        description:
          'Insertion Sort ใช้พื้นที่เล็กน้อยในการเรียง เช่น ตัวแปรเก็บค่าความยาวอาร์เรย์ หรือค่า Key สำหรับใช้แทรกในแต่ละรอบ',
      },
    },
    pros: ['ง่ายต่อการทำความเข้าใจและใช้งาน', 'ใช้พื้นที่หน่วยความจำคงที่'],
    cons: [
      'ความเร็วต่ำเมื่อเทียบกับอัลกอริทึมอื่น',
      'ไม่เหมาะกับข้อมูลขนาดใหญ่ (เวลาที่ใช้แปรผันตรงกับขนาดข้อมูล)',
    ],
  };
}
