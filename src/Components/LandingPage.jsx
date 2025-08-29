import React, { useState } from "react";
import {
  FaUsers,
  FaRocket,
  FaAward,
  FaCalendarAlt,
  FaTrophy,
  FaGraduationCap,
  FaClock,
  FaMapMarkerAlt,
  FaEye,
  FaPlus,
} from "react-icons/fa";

export default function LandingPage() {
  const [events, setEvents] = useState([
    {
      title: "Robotics Club kick-off",
      date: "Sep 10, 2024",
      time: "18:00",
      location: "Engineering Building, Room 101",
      credits: 10,
      tag: "networking",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Annual Tech Fest 2024",
      date: "Mar 15, 2024",
      time: "09:00",
      location: "Entire Campus",
      credits: 40,
      tag: "fest",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Design Thinking Workshop",
      date: "Mar 5, 2024",
      time: "13:00",
      location: "Innovation Center",
      credits: 20,
      tag: "workshop",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "TechCorp Campus Placement Drive",
      date: "Mar 1, 2024",
      time: "10:00",
      location: "Placement Cell",
      credits: 25,
      tag: "placement",
      color: "bg-orange-50 border-orange-200",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    credits: "",
    tag: "",
    color: "bg-gray-50 border-gray-200",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) return;
    setEvents([...events, newEvent]);
    setNewEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      credits: "",
      tag: "",
      color: "bg-gray-50 border-gray-200",
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">CS</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome back, Aryan! 👋
              </h2>
              <p className="text-gray-600">
                Connect with talented students and post opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* ... Stats cards unchanged ... */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Events */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Upcoming Events
              </h3>
              <button
                className="text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => setShowForm(true)}
              >
                View All
              </button>
            </div>

            {/* Add Event Form */}
            {showForm && (
              <div className="bg-white p-4 rounded-xl shadow-sm border mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Create New Event</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    placeholder="Event Title"
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    placeholder="Date (e.g. Mar 20, 2024)"
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="time"
                    value={newEvent.time}
                    onChange={handleInputChange}
                    placeholder="Time (e.g. 10:00)"
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="credits"
                    value={newEvent.credits}
                    onChange={handleInputChange}
                    placeholder="Credits"
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="tag"
                    value={newEvent.tag}
                    onChange={handleInputChange}
                    placeholder="Tag (e.g. workshop)"
                    className="p-2 border rounded"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleAddEvent}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add Event
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`${event.color} rounded-xl p-6 border-2`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                          {event.tag}
                        </span>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-xs" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaClock className="text-xs" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaAward className="text-xs" />
                          <span>{event.credits} Credits</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                        <FaEye />
                        <span>View Details</span>
                      </button>
                      <span className="text-orange-600 text-sm font-medium">
                        +{event.credits} credits
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FaRocket className="text-blue-600" />
                <span>Recent Activity</span>
              </h3>
              <div className="text-center py-8 text-gray-500">
                <FaUsers className="mx-auto text-3xl mb-2 opacity-50" />
                <p>No recent activity</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                >
                  <FaPlus />
                  <span>Create Event</span>
                </button>
                <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
                  Browse Communities
                </button>
                <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
                  View Profile
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Campus Credits</span>
                  <span className="font-bold text-orange-600">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Badges</span>
                  <span className="font-bold text-purple-600">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
