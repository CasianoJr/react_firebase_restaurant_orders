import React from "react";
import { Spin, Space } from "antd";

export default function LoadingPage() {
   return (
      <div className="d-flex justify-content-center mt-5">
         <Space size="middle">
            <Spin size="large" />
         </Space>
      </div>
   );
}
