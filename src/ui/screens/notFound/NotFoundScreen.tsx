import { BasicLayout } from "../../layouts/basic/BasicLayout";

export const NotFoundScreen: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <BasicLayout title={title ?? "Not found"}>
      <h1>Not found</h1>
    </BasicLayout>
  );
};
