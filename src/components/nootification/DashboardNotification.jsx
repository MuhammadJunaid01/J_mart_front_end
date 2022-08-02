import React from "react";
import "../../assets/styles/dasBoardNotification.css";
import NotificationImage1 from "../../assets/images/notificationImage.jpg";
import NotificationImage2 from "../../assets/images/user_chat.jpg";
const DashboardNotification = ({ showNotificatin }) => {
  const notification = [
    {
      name: "MSI Modern 14 B10MW Core i3 10th Gen 14",
      image: NotificationImage1,
      status: "New Order",
      date: "May 5 2021 - 10:40PM",
    },
    {
      name: "Sam L. Placed $300 USD order!",
      image: NotificationImage2,
      status: "Stock Out",
      date: "May 2 2021 - 12:40PM",
    },
    {
      name: "Lenovo IdeaPad Slim 3i Celeron N4020 15.6 Please Check!",
      image: NotificationImage1,
      status: "Stock Out",
      date: "May 7 2021 - 02:40AM",
    },
    {
      name: "Intel Pentium Gold G6400 11th Gen PC! Please Check! ",
      image: NotificationImage1,
      status: "Stock Out",
      date: "May 11 2021 - 03:30AM",
    },
    {
      name: "Asus Vivobook X515MA Celeron N4020 15.6 Please Check!",
      image: NotificationImage1,
      status: "Stock Out",
      date: "May 14 2021 - 01:40AM",
    },
    {
      name: "Walton Walpad 10S Tablet",
      image: NotificationImage1,
      status: "New Order",
      date: "May 15 2021 - 11:50PM",
    },
  ];
  return (
    <div>
      {showNotificatin ? (
        <div className="Dashboard_notification_container">
          {notification.map((noti, index) => {
            return (
              <div key={index} className="Dashboard_notification_content">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "7px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <img
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        marginRight: "6px",
                      }}
                      src={noti.image}
                      alt=""
                    />
                  </div>
                  <div className="dasboard_notification_name">
                    <p>{noti.name.slice(0, 30)}</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "7px",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                    >
                      <p
                        className={
                          noti.status === "New Order"
                            ? "dashboard_notification_new_order"
                            : "dashboard_notification_stoct_out"
                        }
                        style={{
                          fontSize: "12px ",
                          fontWeight: "400",
                          fontFamily: "monospace",
                          lineHeight: "17px",
                          marginRight: "8px",
                        }}
                      >
                        {noti.status}
                      </p>
                      <p
                        style={{
                          fontSize: "12px ",
                          fontWeight: "400",
                          fontFamily: "monospace",
                          lineHeight: "17px",
                        }}
                      >
                        {noti.date}
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <p>x</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DashboardNotification;
