import React from "react";
import { Card, Button, Table } from "antd";
import { Link } from "react-router-dom";

export default class BillingPage extends React.Component {
  render() {
    const data = this.props.location.state;
    const dataSource = data;
    dataSource.map(item => (item.total = item.qty * item.price));
    const columns = [
      {
        title: "Item",
        dataIndex: "title",
        key: "item"
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
        render: text => <>&#8377;{text}</>
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
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
        <Link to={{pathname: "/sell", state: data}}>
          <Button>Back</Button>
        </Link>
      </div>
    );
  }
}
