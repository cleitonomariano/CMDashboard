import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { useSelector } from "react-redux";
import useGetMonth from "src/hooks/useGetMonth";

const SalesHistory = () => {
  const { merged } = useSelector((state) => state.dashboard.orders);

  const getMonth = useGetMonth();
  const ordesWithProduct = merged ? [...merged] : [];

  const months = [
    ...new Set(
      ordesWithProduct
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((order) => getMonth(order.date))
    ),
  ];

  const sales = months.map((month) =>
    ordesWithProduct
      .filter((order) => getMonth(order.date) === month)
      .map((order) => order.amount)
      .reduce((acc, curr) => acc + curr, 0)
  );

  const data = months.map((month, i) => ({ month, sales: sales[i] })).slice(-6);

  return (
    <div>
      {data.length > 0 ? (
        <ChartComponent
          id="charts"
          primaryXAxis={{ valueType: "Category" }}
          legendSettings={{ visible: true }}
          tooltip={{ enable: true }}
          primaryYAxis={{ labelFormat: "${value}" }}
        >
          <Inject
            services={[
              ColumnSeries,
              DataLabel,
              Tooltip,
              Legend,
              LineSeries,
              Category,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName="month"
              yName="sales"
              name="Vendas"
              marker={{ dataLabel: { visible: true } }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
};

export default SalesHistory;
