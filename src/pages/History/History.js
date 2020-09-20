import React, { useState, useEffect } from 'react';
import HistoryTable from './HistoryTable/HistoryTable';
import { itemAPI } from '../../api/itemAPI';
import { categoryAPI } from '../../api/categoryAPI';
import Loader from '../../components/Loader/Loader';

const History = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const categories = await categoryAPI.getCategories();
      const records = await itemAPI.getItems();

      const transformedRecords = records.map(record => {
        return {
          ...record,
          categoryName: categories.find((category) => category.id === record.categoryId).name,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход',
        }
      })

      setRecords(transformedRecords)
      setLoading(false)
    }

    loadData()
  }, [])

  return (
    <>
      <div className='page-title'>
        <h3>История записей</h3>
      </div>

      <div className='history-chart'>
        <canvas></canvas>
      </div>

      <section>
        {loading && <Loader/>}
        {!loading && !records.length && <p class="center">Записей пока нет</p>}
        {!loading && records.length && <HistoryTable  records={records}/>}
      </section>
    </>
  );
};

export default History;
