import React from 'react';
import {useHistory} from 'react-router-dom'

const HistoryTable = ({ records }) => {
  const history = useHistory();
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Сумма</th>
          <th>Дата</th>
          <th>Категория</th>
          <th>Тип</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {records.map((record, index) => {
          return (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{record.amount}</td>
              <td>{record.date}</td>
              <td>{record.categoryName}</td>
              <td>
                <span className={'white-text badge ' + record.typeClass}>
                  {record.typeText}
                </span>
              </td>
              <td>
                <button className='btn-small btn' onClick={ () => {history.push(`/details/${index + 1}`)}}>
                  <i className='material-icons'>open_in_new</i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HistoryTable;
