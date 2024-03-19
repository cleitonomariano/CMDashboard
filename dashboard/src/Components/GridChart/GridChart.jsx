import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
} from "@syncfusion/ej2-react-grids";
import { Inject, Page, Sort } from "@syncfusion/ej2-react-grids";
import { useSelector } from "react-redux";

const GridChart = ({ columns, data }) => {
  const renderColumns = columns.map((column, i) => (
    <ColumnDirective key={i} {...column}></ColumnDirective>
  ));
  return (
    <div>
      <GridComponent
        id="adaptiveBrowser"
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        filterSettings={{ type: "Excel" }}
        allowSorting={true}
        allowFiltering={true}
      >
        <ColumnsDirective>{renderColumns}</ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </div>
  );
};

export default GridChart;
