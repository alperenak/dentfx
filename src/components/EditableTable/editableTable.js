import React from 'react';
import './editableTable.scss';
export default function EditableTable({
  titles = ['', '', ''],
  tableData = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
}) {
  return (
    // <div class="table-responsive">
    <table className="table table-striped table-bordered mt-4">
      <thead>
        <tr>
          {titles.map((item) => {
            return (
              <th scope="col" key={item}>
                <div
                  contentEditable={true}
                  style={{ padding: 5, fontWeight: 'bold' }}
                >
                  {item}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => {
          return (
            <tr key={index}>
              {item.map((item1, index) => {
                return (
                  <td key={index}>
                    <div
                      contentEditable={item1.noEdit ? false : true}
                      style={{ padding: 5 }}
                    >
                      {item1.value}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    // </div>
  );
}
