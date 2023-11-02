import React from 'react';

import OrderManagementPage from '../HandleOrderPage';

const CreateOrderPage: React.FC = () => {
  const isCreatePage = true;

  return (
    <OrderManagementPage isCreatePage={isCreatePage} />
  );
}

export default CreateOrderPage;