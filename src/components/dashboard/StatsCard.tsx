import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/Card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number;
  trend?: number;
  icon: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, trend, icon, className }: StatsCardProps) {
  return (
    <Card className={cn('hover:bg-gray-750 transition-colors', className)}>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {trend && (
              <p className={cn(
                'text-sm mt-1',
                trend > 0 ? 'text-green-400' : 'text-red-400'
              )}>
                {trend > 0 ? '+' : ''}{trend}% from last month
              </p>
            )}
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}