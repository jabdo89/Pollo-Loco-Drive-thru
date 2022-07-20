import React from "react";
import PropTypes from "prop-types";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip, Typography } from "antd";
import { DescriptionContainer, TitleContainer } from "./elements";

const { Title } = Typography;

const description = `
  Los negocios son clientes que utilizan Dropin como solución
  de logística para realizar sus envíos. Desde personas individuales
  hasta negocios internacionales.
`;

const TableTitle = () => {
  return (
    <TitleContainer>
      <Tooltip autoAdjustOverflow placement="rightTop" title={description}>
        <DescriptionContainer>
          <Title style={{ margin: "auto 5px" }} level={3}>
            Registros en Vivo
          </Title>
          <InfoCircleOutlined />
        </DescriptionContainer>
      </Tooltip>
    </TitleContainer>
  );
};

TableTitle.defaultProps = {
  search: "",
};

TableTitle.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func.isRequired,
};

export default TableTitle;
