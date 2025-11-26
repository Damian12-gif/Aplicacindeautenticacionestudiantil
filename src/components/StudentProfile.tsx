import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { User, Mail, Phone, MapPin, Calendar, CreditCard, FileText, Award } from 'lucide-react';

export function StudentProfile() {
  const { student } = useAuth();

  if (!student) return null;

  const { personalInfo, academicInfo } = student;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-1">Mi Perfil</h2>
        <p className="text-sm text-gray-600">
          Información personal y académica del estudiante
        </p>
      </div>

      {/* Información Personal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-600" />
            Información Personal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField
              label="Matrícula"
              value={personalInfo.matricula}
              icon={CreditCard}
            />
            <InfoField
              label="Nombre Completo"
              value={`${personalInfo.nombre} ${personalInfo.apellidoPaterno} ${personalInfo.apellidoMaterno}`}
              icon={User}
            />
            <InfoField
              label="Fecha de Nacimiento"
              value={personalInfo.fechaNacimiento}
              icon={Calendar}
            />
            <InfoField
              label="CURP"
              value={personalInfo.curp}
              icon={FileText}
            />
            <InfoField
              label="Correo Electrónico"
              value={personalInfo.email}
              icon={Mail}
            />
            <InfoField
              label="Teléfono"
              value={personalInfo.telefono}
              icon={Phone}
            />
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField
              label="Dirección"
              value={personalInfo.direccion}
              icon={MapPin}
            />
            <InfoField
              label="Ciudad"
              value={personalInfo.ciudad}
            />
            <InfoField
              label="Estado"
              value={personalInfo.estado}
            />
            <InfoField
              label="Código Postal"
              value={personalInfo.codigoPostal}
            />
          </div>
        </CardContent>
      </Card>

      {/* Información Académica */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            Información Académica
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField
              label="Carrera"
              value={academicInfo.carrera}
              className="md:col-span-2"
            />
            <InfoField
              label="Plan de Estudios"
              value={academicInfo.planEstudios}
            />
            <InfoField
              label="Semestre Actual"
              value={`${academicInfo.semestre}º Semestre`}
            />
            <InfoField
              label="Créditos Obtenidos"
              value={`${academicInfo.creditosObtenidos} / ${academicInfo.creditosTotales}`}
            />
            <InfoField
              label="Promedio General"
              value={academicInfo.promedioGeneral.toFixed(2)}
            />
            <InfoField
              label="Estatus Académico"
              value={academicInfo.estatusAcademico}
            />
            <div className="md:col-span-2">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-900">Avance de Carrera</p>
                    <p className="text-xs text-emerald-700 mt-1">
                      {academicInfo.creditosObtenidos} de {academicInfo.creditosTotales} créditos completados
                    </p>
                  </div>
                  <div className="text-2xl text-emerald-700">
                    {Math.round((academicInfo.creditosObtenidos / academicInfo.creditosTotales) * 100)}%
                  </div>
                </div>
                <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full transition-all duration-500"
                    style={{
                      width: `${(academicInfo.creditosObtenidos / academicInfo.creditosTotales) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface InfoFieldProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  className?: string;
}

function InfoField({ label, value, icon: Icon, className = '' }: InfoFieldProps) {
  return (
    <div className={className}>
      <div className="flex items-start gap-2">
        {Icon && <Icon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />}
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-1 text-gray-900 break-words">{value}</p>
        </div>
      </div>
    </div>
  );
}