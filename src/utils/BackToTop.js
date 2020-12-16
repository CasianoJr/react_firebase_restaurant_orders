import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

export default function BackToTop() {
   return (
      <BackTop>
         <div className="btn btn-danger p-1 ml-auto">
            <UpCircleOutlined className="h4 px-lg-1" />
         </div>
      </BackTop>
   );
}
