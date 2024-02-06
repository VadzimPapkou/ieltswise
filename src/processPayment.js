import axiosClient, { apiUrl } from "./axiosClient";

export async function processPayment (email, selectedTime, sessionType) {
  const successUrl = new URL(window.location.origin + "/success-payment");
  const cancelUrl = new URL(window.location.origin + "/error-payment");

  successUrl.searchParams.set("studentEmail", email);
  successUrl.searchParams.set("date", selectedTime);
  successUrl.searchParams.set("sessionType", sessionType);
  const url = new URL(apiUrl + "/payment/paymentLink");
  url.searchParams.set("successUrl", successUrl.toString());
  url.searchParams.set("cancelUrl", cancelUrl.toString());
  url.searchParams.set("studentEmail", email);
  const { data } = await axiosClient.get(url.toString());
  window.location.href = data;
}