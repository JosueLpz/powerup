import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const goals = [
  {
    id: 1,
    title: 'Meditar 10 minutos diarios',
    description: 'Establecer una rutina de meditación matutina',
    progress: 60,
    tasks: [
      { id: 1, text: 'Día 1 - Completado', done: true },
      { id: 2, text: 'Día 2 - Completado', done: true },
      { id: 3, text: 'Día 3 - Completado', done: true },
      { id: 4, text: 'Día 4', done: false },
      { id: 5, text: 'Día 5', done: false },
    ]
  },
  {
    id: 2,
    title: 'Leer 2 libros este mes',
    description: 'Mejorar hábitos de lectura y aprendizaje',
    progress: 75,
    tasks: [
      { id: 1, text: 'Seleccionar libros', done: true },
      { id: 2, text: 'Completar primer libro', done: true },
      { id: 3, text: 'Comenzar segundo libro', done: true },
      { id: 4, text: 'Completar segundo libro', done: false },
    ]
  }
];

export default function Progress() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Seguimiento de Metas</h1>

      <div className="grid gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-background-header p-6 rounded-lg shadow-custom">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{goal.title}</h2>
                <p className="text-text-secondary">{goal.description}</p>
              </div>
              <span className="text-accent-primary font-bold">{goal.progress}%</span>
            </div>

            <div className="w-full bg-background-primary rounded-full h-2 mb-6">
              <div 
                className="bg-accent-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>

            <div className="space-y-3">
              {goal.tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3">
                  {task.done ? (
                    <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                  ) : (
                    <Circle className="w-5 h-5 text-text-secondary" />
                  )}
                  <span className={task.done ? 'text-text-primary' : 'text-text-secondary'}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}