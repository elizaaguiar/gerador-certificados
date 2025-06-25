import { Routes } from '@angular/router';
import { Certificado } from './pages/certificado/certificado';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';

export const routes: Routes = [
    {
        path: "",
        component: Certificados
    },
    {
        path: "certificados/novo",
        component: CertificadoForm
    },
    {
        path: "certificados/:id",
        component: Certificado
    },
];
