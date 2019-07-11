import { Input, message, Pagination, Table } from 'antd';
import React, { useState } from 'react';
const Search = Input.Search;
import { getAllHospitalDetail, getHospitalDetail } from '../request/hospitalCode';
let initCurrentPage = 1;
let initPageSize = 10;
const HospitalCode: any = (props: any) => {
  const [tableData, setTableData] = useState(props.tableData);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);
  const [pageSize, setPageSize] = useState(initPageSize);
  let [validateInput, setValidateInput] = useState(0);
  const [showPagination, setShowPagination] = useState(true);
  let handleChange = (e: any) => {
    let val = e.target.value;
    if (!val) {
      setValidateInput(1);
      return;
    }
    setValidateInput(0);
  };
  let handleSearch = async (val: string) => {
    if (!val) {
      setValidateInput(1);
      return;
    }
    if (validateInput === 0) {
      let dataSource = await getHospitalDetail(val);
      if (dataSource.length === 0) {
        message.info('未查询到医院信息', 0.8);
      }
      setPageSize(10); // 默认每一页的数量
      setCurrentPage(1); // 默认当前页
      setShowPagination(false); // 隐藏分页器
      setTableData(dataSource);
    }
    return;
  };
  const columns = [
    { title: '编码', dataIndex: 'hospitalCode', key: 'code' },
    {
      title: '医院名称',
      dataIndex: 'hospitalName',
      key: 'hospitalName',
      className: 'hospitalNameClass',
      width: 300
    },
    { title: '所属区县', dataIndex: 'county', key: 'county' },
    { title: '医院类别', dataIndex: 'type', key: 'type' },
    { title: '医院等级', dataIndex: 'level', key: 'level' },
    { title: '医院地址', dataIndex: 'address', key: 'address', className: 'hospitalAddressClass' }
  ];
  let pageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
    getAllHospitalDetail(currentPage, pageSize).then(data => {
      setTableData(data.data || '');
    });
    
  };
  let onShowSizeChange = async (pageSize: number) => {
    setPageSize(pageSize);
    getAllHospitalDetail(currentPage, pageSize).then(data => {
      setTableData(data.data || '');
    });
  };

  return (
    <React.Fragment>
      <style jsx>{`
        .hospitalNameClass {
          width: 200px;
        }

        .hospitalAddressClass {
          width: 320px;
        }

        .tabelPagination {
          margin-top: 20px;
          float: right;
        }

        .input {
          position: relative;
          width: 50%;
          margin: 0px auto 40px;
        }

        .input-explain {
          display: none;
          font-variant: tabular-nums;
          font-feature-settings: 'tnum';
          color: #f5222d;
          box-sizing: border-box;
          clear: both;
          min-height: 40px;
          font-size: 14px;
          -webkit-transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          position: absolute;
        }

        .input-error {
          display: block;
        }

        .hospitalNameClass {
          width: 150px;
        }

        .hospitalAddressClass {
          width: 300px;
        }
      `}</style>
      <div className="input">
        <Search
          placeholder="请输入医院名称"
          onSearch={handleSearch}
          allowClear={true}
          enterButton
          autoComplete="off"
          onChange={handleChange}
          className={validateInput === 0 ? '' : 'has-error'}
        />
        <div className={'input-explain ' + (validateInput === 1 ? 'input-error' : '')}>医院名称不能为空</div>
      </div>
      <Table bordered={true} size="middle" locale={{ emptyText: '暂无医院信息' }} columns={columns} pagination={false} dataSource={tableData} />
      {showPagination && (
        <div className="tabelPagination">
          <Pagination
            showQuickJumper
            showSizeChanger
            defaultCurrent={1}
            total={props.total}
            current={currentPage}
            pageSize={pageSize}
            onChange={pageChange}
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      )}
    </React.Fragment>
  );
};

HospitalCode.getInitialProps = async ({ err }: any) => {
  if (err) throw err;
  let data = await getAllHospitalDetail(initCurrentPage, initPageSize);
  return { total: data.total || 0, tableData: data.data || '' };
};

export default HospitalCode;
