import { useContext } from "react";
import UserProfileSidebar from "../components/UserProfile";
import imagePlaceHolder from "../images/placeholder.png";
import { Context } from "../context/Context";

function Profile() {
    const { user} = userContext(Context);

    return (
        <>
        <div className="flex flex-row mt-60px sm:h-fit md:h-full bg-base-200">
            <UserProfileSidebar />
            <main className="container grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center h-full mx-2 mb-3">
                <div className="avatar bg-base-100 rounded-box p-2 mt-2">
                    <div className="w-3/4 mask mask-hexagon grid mx-auto">
                        {user.photo ? (
                            <img src = "" className="w-full h-full object-cover" alt="no pic"/>
                        ) : (
                            <img className="place-self-center" src={imagePlaceholder} alt="no pic" />
                        )}
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}