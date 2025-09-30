---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from "react";
import styles from "./<%=name%>.module.scss";

export interface <%=name%>Props {
}

const <%=name%> = ({
}: <%=name%>Props) => (
  <div className={styles.container}>
    <%=name%>
  </div>
);

export default <%=name%>;
