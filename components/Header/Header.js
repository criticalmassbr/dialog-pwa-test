import * as Style from "./HeaderStyle";
import * as GridStyle from "~/styles/Grid";
import { ArrowLeft } from "~/styles/Icons";

import Link from "next/link";

export default function header({ title, slugPage, directory, typeClass }) {
  return (
    <Style.Header className={typeClass}>
      <GridStyle.Row className="no-gutters">
        <GridStyle.Col
          className="flex align-itcenter no-margin no-padding"
          mobile={1}
          tablet={3}
          desktop={1}
        >
          <Link href={`${directory}`} as={`${slugPage}`}>
            <ArrowLeft className="tx-white fn-wb" />
          </Link>
        </GridStyle.Col>

        <GridStyle.Col
          className="flex align-itcenter cont-center no-margin"
          mobile={10}
          tablet={3}
          desktop={10}
        >
          <p className="fn-s18px fn-wb title">{title}</p>
        </GridStyle.Col>
        <GridStyle.Col
          className="flex align-itcenter no-margin"
          mobile={1}
          tablet={3}
          desktop={1}
        />
      </GridStyle.Row>
    </Style.Header>
  );
}
