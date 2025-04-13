import { useState } from "react";
import { useGetPhoneList } from "../hooks/useGetPhoneList";
import SearchInput from "../components/SearchInput";
import PhoneGrid from "../components/PhoneGrid";
import LoadingIndicator from "../components/LoadingIndicator";

function PhoneList() {
  const [search, setSearch] = useState<string>("");
  const { data: phones = [], isLoading } = useGetPhoneList(search);

  return (
    <div
      data-testid="phone-list-page"
      className="px-5 md:px-[6.25rem] space-y-10 flex-1 h-full"
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="pb-10">
          <SearchInput
            search={search}
            setSearch={setSearch}
            count={phones?.length}
          />
          <PhoneGrid phones={phones} />
        </div>
      )}
    </div>
  );
}

export default PhoneList;
