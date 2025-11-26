import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, TrendingUp } from 'lucide-react';

export function AcademicHistory() {
  const { student } = useAuth();

  if (!student) return null;

  const { historialAcademico, academicInfo } = student;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-1">Historial Académico</h2>
        <p className="text-sm text-gray-600">
          Calificaciones y desempeño académico por semestre
        </p>
      </div>

      {/* Resumen General */}
      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl text-emerald-700 mb-1">
                {academicInfo.promedioGeneral.toFixed(2)}
              </div>
              <p className="text-sm text-emerald-900">Promedio General</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-emerald-700 mb-1">
                {academicInfo.creditosObtenidos}
              </div>
              <p className="text-sm text-emerald-900">Créditos Obtenidos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-emerald-700 mb-1">
                {academicInfo.semestre}º
              </div>
              <p className="text-sm text-emerald-900">Semestre Actual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historial por Semestre */}
      <div className="space-y-6">
        {historialAcademico.map((semestre) => (
          <Card key={semestre.semestre}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <CardTitle>Semestre {semestre.semestre}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{semestre.periodo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-lg">
                    Promedio: {semestre.promedioSemestral.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm text-gray-600">
                        Clave
                      </th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">
                        Materia
                      </th>
                      <th className="text-center py-3 px-4 text-sm text-gray-600">
                        Créditos
                      </th>
                      <th className="text-center py-3 px-4 text-sm text-gray-600">
                        Calificación
                      </th>
                      <th className="text-center py-3 px-4 text-sm text-gray-600">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {semestre.materias.map((materia, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <span className="text-sm text-gray-600">{materia.clave}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-sm">{materia.nombre}</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-sm">{materia.creditos}</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-lg ${
                              materia.calificacion >= 90
                                ? 'bg-green-100 text-green-700'
                                : materia.calificacion >= 80
                                ? 'bg-blue-100 text-blue-700'
                                : materia.calificacion >= 70
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {materia.calificacion}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Badge
                            variant={materia.estado === 'Aprobado' ? 'default' : 'destructive'}
                            className={
                              materia.estado === 'Aprobado'
                                ? 'bg-green-600 hover:bg-green-700'
                                : ''
                            }
                          >
                            {materia.estado}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Resumen del Semestre */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    Total de materias: {semestre.materias.length}
                  </span>
                  <span className="text-gray-600">
                    Total de créditos:{' '}
                    {semestre.materias.reduce((sum, m) => sum + m.creditos, 0)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}