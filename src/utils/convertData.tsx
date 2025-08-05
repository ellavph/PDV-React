import React from 'react';

interface DateTimeFormatterProps {
  isoDateTime?: string;
}

const DateTimeFormatter: React.FC<DateTimeFormatterProps> = ({ isoDateTime }) => {
  const formatDateTime = (isoDateTime: string) => {
    const date = new Date(isoDateTime);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  return <span>{isoDateTime ? formatDateTime(isoDateTime) : ''}</span>;
};

export default DateTimeFormatter;
