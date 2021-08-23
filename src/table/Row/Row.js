import * as React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { RowContainer } from '@table-library/react-table-library/common/components/Row';
import { isRowClick } from '@table-library/react-table-library/common/util/isRowClick';
import { ThemeContext } from '@table-library/react-table-library/common/context/Theme';
import { TableContext } from '@table-library/react-table-library/common/context/Table';
import { PanelContext } from '@table-library/react-table-library/common/context/Panel';
import { SelectContext } from '@table-library/react-table-library/common/context/Select';
import { TreeContext } from '@table-library/react-table-library/common/context/Tree';

import { useRowLayout } from './useRowLayout';
import { useDoubleClick } from './useDoubleClick';

const getPanels = (panels, props, data) =>
  (panels || []).map((panel) => panel(props, data)).filter(Boolean);

const getRowProps = (features, props) =>
  Object.values(features)
    .filter(Boolean)
    .filter((feature) => feature._getRowProps)
    .map((feature) => feature._getRowProps(props, features));

const evaluateProps = (rowPropsByFeature, onSingleClick) => {
  const {
    themeByFeature,
    classNamesByFeature,
    onClickByFeature,
    ...specificsByFeature
  } = rowPropsByFeature.reduce(
    (acc, value) => {
      const { theme, className, onClick, panels } = value;

      const mergedTheme = `
        ${acc.themeByFeature}
        ${theme}
      `;

      const mergedClassName = cs(acc.classNamesByFeature, className);

      const mergedOnClick = (tableItem, event) => {
        onClick(tableItem, event);
        acc.onClickByFeature(tableItem, event);
      };

      const mergedPanels = acc.panelsByFeature.concat(panels || []);

      return {
        ...acc,
        themeByFeature: mergedTheme,
        classNamesByFeature: mergedClassName,
        onClickByFeature: mergedOnClick,
        panelsByFeature: mergedPanels,
      };
    },
    {
      themeByFeature: '',
      classNamesByFeature: '',
      onClickByFeature: (tableItem, event) => {
        if (onSingleClick && isRowClick(event)) {
          onSingleClick(tableItem, event);
        }
      },
      panelsByFeature: [],
    }
  );

  return {
    themeByFeature,
    classNamesByFeature,
    onClickByFeature,
    ...specificsByFeature,
  };
};

const Row = (props) => {
  const {
    item,
    className,
    disabled,
    onClick,
    onDoubleClick,
    children,
    ...rest
  } = props;

  const data = React.useContext(TableContext);
  const select = React.useContext(SelectContext);
  const tree = React.useContext(TreeContext);
  const panels = React.useContext(PanelContext);

  const features = {
    select,
    tree,
    // others
  };

  const panelsByRow = getPanels(panels, props, data);
  const rowPropsByFeature = getRowProps(features, props);

  const theme = React.useContext(ThemeContext);

  const {
    themeByFeature,
    classNamesByFeature,
    onClickByFeature,
    panelsByFeature,
  } = evaluateProps(rowPropsByFeature, onClick);

  const ref = React.useRef();

  useDoubleClick(ref, onClickByFeature, onDoubleClick, item);
  useRowLayout(ref, '.td');

  return (
    <>
      <RowContainer
        {...rest}
        role="row"
        className={cs(
          'tr',
          'tr-body',
          classNamesByFeature,
          className,
          {
            disabled,
            clickable: onClickByFeature || onDoubleClick,
          }
        )}
        css={`
          ${themeByFeature}
          ${theme?.BaseRow}
            ${theme?.Row}
        `}
        ref={ref}
      >
        {children(item)}
      </RowContainer>

      {panelsByFeature.map((panel) =>
        React.cloneElement(panel, { key: item.id })
      )}

      {panelsByRow.map((panel) =>
        React.cloneElement(panel, { key: item.id })
      )}
    </>
  );
};

Row.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
};

export { Row };
