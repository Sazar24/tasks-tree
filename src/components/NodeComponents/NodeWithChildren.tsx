import * as React from "react";
import { connect } from "react-redux";
import { INode, SingleNode } from "../../models/Node";
import { List, Container, Button } from "semantic-ui-react";
import { v1 } from "uuid";
import { IState } from "../../reducers";
import NewNodeButton from "./NewNodeButton";
import NodeContentWithoutChildren from "./NodeContentWithoutChildren";
import ConnectedNodeWithChildren from "./connectedComponents/ConnectedNode";

export interface IProps {
  nodeId: string;
  node: INode;
  childrenIDs: string[];
}

export class NodeWithChildren extends React.Component<IProps> {
  public renderMyChilds() {
    const { childrenIDs } = this.props;
    if (!childrenIDs || childrenIDs.length === 0) {
      return;
    }

    return (
      <List>
        {childrenIDs.map(id => {
          return (
            <List.Item key={id}>
              <ConnectedNodeWithChildren nodeId={id} />
            </List.Item>
          );
        })}
      </List>
    );
  }

  public render(): any {
    const { node } = this.props;
    if (node === undefined) {
      throw new Error("passed undefined {node} to NodeFrame");
    }

    return (
      <List.Item style={{
        minWidth: "500px",
        padding: "0 0 0 12px",
        border: "1px solid black",
        backgroundColor: "silver",
        marginBottom: "2px",
        display: "inline-block"
      }}>

        <div style={{ display: "inline-flex", width: "100%" }}>
          <NodeContentWithoutChildren node={node} />
          {/* <Button floated="right"> kmkmkmkm </Button> */}
          <NewNodeButton nodeId={this.props.nodeId} />
        </div>
        {this.renderMyChilds()}
      </List.Item>
    );
  }
}