import { Component } from '@angular/core';
import { SelectionSortStepperComponent } from '../../components/selection-sort-stepper/selection-sort-stepper.component';
import { SelectionSortVisualizerComponent } from '../../components/selection-sort-visualizer/selection-sort-visualizer.component';
import { Detail } from '../../../../shared/models/detail';
import { DetailComponent } from '../../../../shared/components/detail/detail.component';

@Component({
  selector: 'app-selection-sort-detail',
  imports: [
    DetailComponent,
    SelectionSortStepperComponent,
    SelectionSortVisualizerComponent,
  ],
  templateUrl: './selection-sort-detail.component.html',
  styleUrl: './selection-sort-detail.component.css',
})
export class SelectionSortDetailComponent {
  detail: Detail = {
    title: 'Selection Sort',
    description:
      'Selection Sort ทำงานโดยการแบ่งอาร์เรย์ออกเป็นสองส่วน คือส่วนที่เรียงลำดับแล้วและส่วนที่ยังไม่ได้เรียงลำดับ จากนั้นเลือกค่าที่น้อยที่สุดจากส่วนที่ยังไม่ได้เรียงลำดับมาไว้ที่ตำแหน่งถัดไปของส่วนที่เรียงลำดับแล้ว กระบวนการนี้จะดำเนินการจนกว่าข้อมูลทั้งหมดจะเรียงลำดับเสร็จสิ้น',
    complexity: {
      time: {
        average: 'O(n^2)',
        worst: 'O(n^2)',
        best: 'O(n^2)',
        description:
          'การทำงานของ Selection Sort ไม่มีกรณีที่ดีที่สุด หรือแย่ที่สุดไปกว่ากัน เพราะในแต่ละรอบจะทำการค้นหาค่าที่น้อยที่สุดในส่วนที่ยังไม่ได้เรียงทั้งหมด',
      },
      space: {
        average: 'O(1)',
        worst: 'O(1)',
        best: 'O(1)',
        description:
          'Bubble Sort ใช้พื้นที่เล็กน้อยในการเรียง เช่น ตัวแปรเก็บค่าความยาวอาร์เรย์ หรือ ตัวแปรเก็บค่าตำแหน่งที่น้อยที่สุด',
      },
    },
    pros: ['ง่ายต่อการทำความเข้าใจและใช้งาน', 'ใช้พื้นที่หน่วยความจำคงที่'],
    cons: [
      'ความเร็วต่ำเมื่อเทียบกับอัลกอริทึมอื่น',
      'ไม่เหมาะกับข้อมูลขนาดใหญ่ (เวลาที่ใช้แปรผันตรงกับขนาดข้อมูล)',
      'ไม่สามารถปรับปรุงเวลาในการทำงานได้ ถึงแม้ข้อมูลจะเรียงมาก่อนแล้วก็ตาม',
    ],
  };
}
