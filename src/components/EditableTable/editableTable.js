import React from "react";
import "./editableTable.scss";
export default function EditableTable({
  titles = ["", "", ""],
  tableData = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
}) {
  return (
    // <div class="table-responsive">
    <table class="table table-striped table-bordered mt-4">
      <thead>
        <tr>
          {titles.map((item) => {
            return (
              <th scope="col">
                <div
                  contentEditable={true}
                  style={{ padding: 5, fontWeight: "bold" }}
                >
                  {item}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => {
          return (
            <tr>
              {item.map((item1) => {
                return (
                  <td>
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
