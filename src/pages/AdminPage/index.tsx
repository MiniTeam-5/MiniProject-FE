import React from 'react';
import Admin from '../../components/AdminPage/Admin';
import PageTitle from '../../components/common/PageTitle';

function AdminPage() {
  return (
    <div>
      <PageTitle title='사원 관리' />
      <Admin />
    </div>
  );
}
export default AdminPage;
