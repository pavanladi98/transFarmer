import React from "react";
import { Card, Button, Table } from "antd";
import { Link } from "react-router-dom";

export default class BillingPage extends React.Component {
  render() {
    const { type } = this.props;
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
        render: item => (item === "Total" ? <b>{item}</b> : item)
      },
      {
        title: "Quantity",
        dataIndex: "qty",
        key: "qty"
      },
      // {
      //   title: "Rate",
      //   dataIndex: "price",
      //   key: "price",
      //   render: text => (text ? <>&#8377;{text}</> : null)
      // },
      // {
      //   title: "Price",
      //   dataIndex: "total",
      //   key: "total",
      //   render: text => <>&#8377;{text}</>
      // }
    ];
    delete dataSource.price;
    delete dataSource.total;
    return (
      <div style={{ background: "#ECECEC"}}>
        <Card
          title="Order summary"
          bordered={false}
          style={{
            width: "100%",
            margin: "auto",
            height: "380px",
            overflowY: "scroll"
          }}
        >
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </Card>
        <Link to={{ pathname: "/sell", state: data }}>
          <Button
            type="secondary"
            size="large"
            style={{ margin: "20px 50px 50px 75px" }}
          >
            Back
          </Button>
        </Link>
        <Link to={type === "sell" ? "/sell/address" : "/buy/address"}>
          <Button
            type="primary"
            size="large"
            style={{ margin: "20px 50px 50px 0px" }}
            disabled={!totalQuantity}
          >
            Confirm
          </Button>
        </Link>
      </div>
    );
  }
}
