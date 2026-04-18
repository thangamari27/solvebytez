// pages/ServicePage.jsx
import { useParams, Navigate } from "react-router-dom";
import Service from "./Service";
import { servicesMap } from "../data/serviceData";

export default function ServicePage() {
  const { slug } = useParams();
  
  // Get the service data for the current slug
  const serviceData = servicesMap[slug];
  
  // If slug doesn't exist, redirect to 404 or services page
  if (!serviceData) {
    return <Navigate to="/404" replace />;
  }
  
  // Render the service page with the specific data
  return <Service data={serviceData} />;
}