import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.css'],
})
export class HospitalDashboardComponent {
  @ViewChild('tableBody') tableBody?: ElementRef<any>;
  selectedValue = 'All';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.tableBody) {
      const tableRows = this.tableBody.nativeElement.querySelectorAll('tr');

      tableRows.forEach((row: HTMLTableRowElement) => {
        const statusCell = row.querySelector('[data-label="Status"] span');
        if (!statusCell) {
          return; // Skip rows without status cell
        }

        const status = statusCell?.textContent?.trim() || ''; // Use optional chaining and provide a default value
        if (this.selectedValue === 'All' || status === this.selectedValue) {
          this.renderer.removeStyle(row, 'display');
        } else {
          this.renderer.setStyle(row, 'display', 'none');
        }
      });
    }
  }

  filterTable(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
    this.ngAfterViewInit(); // Reapply the filter when the select changes
  }
}
