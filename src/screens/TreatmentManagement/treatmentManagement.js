import React, { useState } from "react";
import Button from "../../components/Button/button";
import Dropdown from "../../components/Dropdown/dropdown";
import EditableTable from "../../components/EditableTable/editableTable";
import "./treatmentManagement.scss";
const staticData = [
  {
    tariff: "epidemis",
    list: [
      {
        treatment: "Diş Çekimi",
        price: 180,
        currency: "TRY",
      },
      {
        treatment: "Komplikasyonlu Diş Çekimi",
        price: 300,
        currency: "TRY",
      },
      {
        treatment: "Gömülü Diş Operasyonu",
        price: 600,
        currency: "TRY",
      },
      {
        treatment: "İmplant Çıkarılması",
        price: 1000,
        currency: "TRY",
      },
      {
        treatment: "T.M.E. Mekanoterapi",
        price: 475,
        currency: "TRY",
      },
    ],
  },
  {
    tariff: "TDB 2020",
    list: [
      {
        treatment: "Diş Çekimi",
        price: 175,
        currency: "TRY",
      },
      {
        treatment: "Komplikasyonlu Diş Çekimi",
        price: 305,
        currency: "TRY",
      },
      {
        treatment: "Gömülü Diş Operasyonu",
        price: 570,
        currency: "TRY",
      },
      {
        treatment: "İmplant Çıkarılması",
        price: 650,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
    ],
  },
  {
    tariff: "TDB 2020 (EUR)",
    list: [
      {
        treatment: "Diş Çekimi",
        price: 26.54,
        currency: "EUR",
      },
      {
        treatment: "Komplikasyonlu Diş Çekimi",
        price: 46.25,
        currency: "EUR",
      },
      {
        treatment: "Gömülü Diş Operasyonu",
        price: 86.43,
        currency: "EUR",
      },
      {
        treatment: "İmplant Çıkarılması",
        price: 98.56,
        currency: "EUR",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
    ],
  },
  {
    tariff: "TDB 2020 (USD)",
    list: [
      {
        treatment: "Diş Çekimi",
        price: 28.97,
        currency: "USD",
      },
      {
        treatment: "Komplikasyonlu Diş Çekimi",
        price: 54.25,
        currency: "USD",
      },
      {
        treatment: "Gömülü Diş Operasyonu",
        price: 82.45,
        currency: "USD",
      },
      {
        treatment: "İmplant Çıkarılması",
        price: 108.56,
        currency: "USD",
      },
      {
        treatment: "Apne Drenajı ve Tedavisi (İntraoral)",
        price: 405,
        currency: "TRY",
      },
    ],
  },
];
const tableData = [
  [
    { value: "alperen" },
    { value: "asad" },
    {
      value: <button className="btn btn-primary">dsas</button>,
      noEdit: true,
    },
  ],
  [
    { value: "alperen" },
    { value: "asad" },
    {
      value: <button className="btn btn-primary">dsas</button>,
      noEdit: true,
    },
  ],
  [
    { value: "alperen" },
    { value: "asad" },
    {
      value: <button className="btn btn-primary">dsas</button>,
      noEdit: true,
    },
  ],
];
const convertedStaticData = staticData.map((item) => {
  let arr = [];
  item.list.map((item) => {
    arr.push([
      { value: item.treatment },
      { value: item.price },
      { value: item.currency },
      // {
      //   value: <button className="btn btn-success">Ekle</button>,
      //   noEdit: true,
      // },
      {
        value: <button className="btn btn-danger">Sil</button>,
        noEdit: true,
      },
    ]);
  });
  return arr;
});
const convertedStaticDataToTarife = staticData.map((item) => {
  return [
    { value: item.tariff },
    {
      value: <button className="btn btn-danger">Sil</button>,
      noEdit: true,
    },
  ];
});
const TarifeTitles = ["Tarife", "Sil"];
const TreatmentTitles = ["Tedavi", "Fiyat", "Para Birimi", "Sil"];
export default function TreatmentManagement() {
  const [dropdownOrder, setDropdownOrder] = useState(0);
  const [realTarifeData, setRealTarifeData] = useState(
    convertedStaticDataToTarife
  );
  const [realTableData, setRealTableData] = useState(convertedStaticData[0]);
  console.log(convertedStaticDataToTarife);
  return (
    <div className={"treatmentManagement"}>
      <div className={"d-flex justify-content-between align-items-center"}>
        <h2 className={"mb-2"}>Tarifeler</h2>

        <div className={"p-1"}>
          <button
            className="btn btn-primary"
            onClick={() => {
              setRealTarifeData([
                [
                  { value: "Yeni Tarife" },

                  {
                    value: <button className="btn btn-danger">Sil</button>,
                    noEdit: true,
                  },
                ],
                ...realTarifeData,
              ]);
            }}
          >
            Tarife Ekle
          </button>
        </div>
      </div>
      <EditableTable tableData={realTarifeData} titles={TarifeTitles} />
      <div className={"d-flex justify-content-between align-items-center"}>
        <h2 className={"mb-4 mt-2"}>Tedavi</h2>

        <div className={"p-1"}>
          <button
            className="btn btn-primary"
            onClick={() => {
              setRealTableData([
                [
                  { value: "Yeni Tedavi" },
                  { value: 1000 },
                  { value: "TRY" },
                  {
                    value: <button className="btn btn-danger">Sil</button>,
                    noEdit: true,
                  },
                ],
                ...realTableData,
              ]);
            }}
          >
            Tedavi ekle
          </button>
        </div>
      </div>
      <Dropdown
        type={"selectable"}
        selectableData={staticData.map((item) => {
          let arr = [];
          arr.push(item.tariff);
          return arr;
        })}
        onChange={(e) => {
          staticData.map((item, index) => {
            if (item.tariff.includes(e)) {
              console.log(e, item.tariff);

              setRealTableData(convertedStaticData[index]);
            }
          });
        }}
      />
      <EditableTable tableData={realTableData} titles={TreatmentTitles} />
    </div>
  );
}
