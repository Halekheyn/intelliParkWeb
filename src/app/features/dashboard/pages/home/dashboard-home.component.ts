import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHomeComponent {
  readonly summaryCards = [
    { title: 'Ventas del día', value: '$ 3.250.000', helper: '+12% vs ayer' },
    { title: 'Usuarios activos', value: '128', helper: '8 conectados ahora' },
    { title: 'Tickets abiertos', value: '14', helper: '3 prioridad alta' },
    { title: 'Tasa de conversión', value: '22.4%', helper: 'Meta: 25%' }
  ];

  readonly quickItems = [
    'Gestionar usuarios',
    'Crear reporte mensual',
    'Configurar permisos',
    'Consultar actividad'
  ];
}
