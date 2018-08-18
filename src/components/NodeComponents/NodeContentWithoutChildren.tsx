import * as React from 'react';
import { INode } from "../../models/Node";
import { List } from 'semantic-ui-react';

interface INodeMainContent {
    node: INode;
}

class NodeContentWithoutChildren extends React.Component<INodeMainContent>{
    public render() {
        const { node } = this.props;
        return (
            <div>
                <List.Header>
                    {node.header} <span style={{ float: "right" }}> [Id: {node.Id}] </span>
                </List.Header>
                <List.Description>
                    {node.description}
                    <span style={{ float: "right" }}> [parent:{" "} {node.parentID ? node.parentID : "(i dont have any parents)"}]</span>
                </List.Description>
            </div>
        )
    }
}

export default NodeContentWithoutChildren;