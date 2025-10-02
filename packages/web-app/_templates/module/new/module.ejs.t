---
to: src/modules/<%=name%>/<%=name%>.tsx
---
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
