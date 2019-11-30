import React from "react";
import { Card, Button, Table } from "antd";
import { Link } from "react-router-dom";
import * as languageFile from "./LanguageMessages";

const language =
  languageFile.languageConfig === "hindi"
    ? languageFile.hindi
    : languageFile.english;

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
        title: language.Item,
        dataIndex: "title",
        key: "item",
        render: item => (item === "Total" ? <b>{language.Total}</b> : item)
      },
      {
        title: language.Quantity,
        dataIndex: "qty",
        key: "qty"
      }
    ];
    delete dataSource.price;
    delete dataSource.total;
    return (
      <div style={{ background: "#ECECEC" }}>
        <Card
          title={language.OrderSummary}
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
            {language.Back}
          </Button>
        </Link>
        <Link to={type === "sell" ? "/sell/address" : "/buy/address"}>
          <Button
            type="primary"
            size="large"
            style={{ margin: "20px 50px 50px 0px" }}
            disabled={!totalQuantity}
          >
            {language.Confirm}
          </Button>
        </Link>
      </div>
    );
  }
}
