import React from 'react';

const Alert: React.FC<{ type: string; message: string }> = ({ type, message }) => {
  let bgColor = '';
  let textColor = '';

  switch (type) {
    case 'info':
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-700 dark:text-blue-800';
      break;
    case 'danger':
      bgColor = 'bg-red-100';
      textColor = 'text-red-700 dark:text-red-800';
      break;
    case 'success':
      bgColor = 'bg-green-100';
      textColor = 'text-green-700 dark:text-green-800';
      break;
    default:
      break;
  }

  return (
    <div className={`p-4 mb-4 text-sm ${textColor} ${bgColor} rounded-lg dark:bg-blue-200`} role="alert">
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Alert;
