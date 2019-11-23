import React from "react";
import { Card, Button, Table } from "antd";
import { Link } from "react-router-dom";

export default class BillingPage extends React.Component {
  render() {
    const data = this.props.location.state;
    const dataSource = data.filter(item => item.qty !== 0);
    dataSource.map(item => (item.total = item.qty * item.price));
    let totalPrice = 0;
    let totalQuantity = 0;
    dataSource.forEach(item => {
      totalPrice += item.total;
      totalQuantity += parseInt(item.qty);
    });
    dataSource.push({ total: totalPrice, qty: totalQuantity, title: "Total" });
    const columns = [
      {
        title: "Item",
        dataIndex: "title",
        key: "item",
        render: item => (item === "Total"? <b>{item}</b>: item)
      },
      {
        title: "Quantity",
        dataIndex: "qty",
        key: "qty"
      },
      {
        title: "Rate",
        dataIndex: "price",
        key: "price",
        render: text => (text ? <>&#8377;{text}</> : null)
      },
      {
        title: "Price",
        dataIndex: "total",
        key: "total",
        render: text => <>&#8377;{text}</>
      }
    ];
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Card title="Card title" bordered={false} style={{ width: "50%" }}>
          {/* {data.map(item => (
            <li>{item.title} {item.qty} {item.price}</li>
          ))} */}
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </Card>
        <Link to={{ pathname: "/sell", state: data }}>
          <Button>Back</Button>
        </Link>
      </div>
    );
  }
}
