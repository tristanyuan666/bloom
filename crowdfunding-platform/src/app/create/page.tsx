'use client';

import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Upload, 
  X, 
  Plus, 
  CheckCircle,
  DollarSign,
  Calendar,
  MapPin,
  Users,
  Gift,
  Eye,
  Edit
} from 'lucide-react';

const CAMPAIGN_CATEGORIES = [
  { id: 'food-beverage', name: 'Food & Beverage', icon: '🍽️', description: 'Restaurants, cafes, food trucks, and beverage businesses' },
  { id: 'technology', name: 'Technology', icon: '💻', description: 'Software, hardware, apps, and tech innovations' },
  { id: 'fashion', name: 'Fashion', icon: '👗', description: 'Clothing, accessories, and sustainable fashion' },
  { id: 'crafts', name: 'Crafts', icon: '🎨', description: 'Handmade goods, art, and creative products' },
  { id: 'agriculture', name: 'Agriculture', icon: '🌱', description: 'Farming, urban agriculture, and sustainable food' },
  { id: 'education', name: 'Education', icon: '📚', description: 'Educational programs, courses, and learning tools' },
  { id: 'health', name: 'Health & Wellness', icon: '💪', description: 'Fitness, wellness, and health-related businesses' },
  { id: 'community', name: 'Community', icon: '🤝', description: 'Local initiatives, community spaces, and social impact' }
];

const STEPS = [
  { id: 'category', title: 'Category', description: 'Choose your campaign category' },
  { id: 'basics', title: 'Basics', description: 'Campaign details and description' },
  { id: 'media', title: 'Media', description: 'Upload images and videos' },
  { id: 'funding', title: 'Funding', description: 'Set your goal and duration' },
  { id: 'rewards', title: 'Rewards', description: 'Create reward tiers' },
  { id: 'review', title: 'Review', description: 'Review and publish' }
];

export default function CreateCampaignPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    subtitle: '',
    location: '',
    description: '',
    images: [] as File[],
    video: null as File | null,
    goal: 0,
    duration: 30,
    rewards: [
      {
        id: 1,
        title: '',
        description: '',
        amount: 0,
        perks: [''],
        limited: false,
        quantity: 0
      }
    ]
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleRewardChange = (index: number, field: string, value: any) => {
    const newRewards = [...formData.rewards];
    newRewards[index] = { ...newRewards[index], [field]: value };
    setFormData(prev => ({ ...prev, rewards: newRewards }));
  };

  const addReward = () => {
    const newReward = {
      id: Date.now(),
      title: '',
      description: '',
      amount: 0,
      perks: [''],
      limited: false,
      quantity: 0
    };
    setFormData(prev => ({ ...prev, rewards: [...prev.rewards, newReward] }));
  };

  const removeReward = (index: number) => {
    if (formData.rewards.length > 1) {
      const newRewards = formData.rewards.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, rewards: newRewards }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    switch (currentStep) {
      case 0: // Category
        if (!formData.category) {
          newErrors.category = 'Please select a category';
        }
        break;
      case 1: // Basics
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.subtitle.trim()) newErrors.subtitle = 'Subtitle is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        break;
      case 2: // Media
        if (formData.images.length === 0) {
          newErrors.media = 'Please upload at least one image';
        }
        break;
      case 3: // Funding
        if (formData.goal < 100) newErrors.goal = 'Goal must be at least $100';
        if (formData.duration < 1 || formData.duration > 60) {
          newErrors.duration = 'Duration must be between 1 and 60 days';
        }
        break;
      case 4: // Rewards
        formData.rewards.forEach((reward, index) => {
          if (!reward.title.trim()) {
            newErrors[`reward-${index}-title`] = 'Reward title is required';
          }
          if (reward.amount < 1) {
            newErrors[`reward-${index}-amount`] = 'Reward amount must be at least $1';
          }
        });
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      // Simulate API call
      console.log('Campaign created:', formData);
      // Redirect to dashboard or campaign page
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Category</h2>
              <p className="text-gray-600">Select the category that best describes your campaign</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAMPAIGN_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleInputChange('category', category.id)}
                  className={`p-6 border-2 rounded-xl text-left transition-all ${
                    formData.category === category.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </button>
              ))}
            </div>
            
            {errors.category && (
              <p className="text-red-600 text-sm">{errors.category}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Campaign Basics</h2>
              <p className="text-gray-600">Tell us about your campaign</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.title ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your campaign title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle *
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.subtitle ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Brief description of your campaign"
                />
                {errors.subtitle && <p className="mt-1 text-sm text-red-600">{errors.subtitle}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.location ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="City, State"
                  />
                </div>
                {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  rows={6}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.description ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Tell your story and explain your project..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Media</h2>
              <p className="text-gray-600">Add images and videos to showcase your campaign</p>
            </div>
            
            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Images *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Upload images to showcase your campaign</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="btn-outline cursor-pointer">
                    Choose Images
                  </label>
                </div>
                
                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Video Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Video (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Add a video to tell your story</p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleInputChange('video', e.target.files?.[0] || null)}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" className="btn-outline cursor-pointer">
                    Choose Video
                  </label>
                </div>
              </div>
            </div>
            
            {errors.media && <p className="text-red-600 text-sm">{errors.media}</p>}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Funding Details</h2>
              <p className="text-gray-600">Set your funding goal and campaign duration</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Funding Goal *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    min="100"
                    value={formData.goal}
                    onChange={(e) => handleInputChange('goal', Number(e.target.value))}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.goal ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="0"
                  />
                </div>
                {errors.goal && <p className="mt-1 text-sm text-red-600">{errors.goal}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Duration (days) *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', Number(e.target.value))}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.duration ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="30"
                  />
                </div>
                {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Rewards</h2>
              <p className="text-gray-600">Design reward tiers for your backers</p>
            </div>
            
            <div className="space-y-6">
              {formData.rewards.map((reward, index) => (
                <div key={reward.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Reward {index + 1}</h3>
                    {formData.rewards.length > 1 && (
                      <button
                        onClick={() => removeReward(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reward Title *
                      </label>
                      <input
                        type="text"
                        value={reward.title}
                        onChange={(e) => handleRewardChange(index, 'title', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors[`reward-${index}-title`] ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Free Coffee for a Week"
                      />
                      {errors[`reward-${index}-title`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`reward-${index}-title`]}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pledge Amount *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="number"
                          min="1"
                          value={reward.amount}
                          onChange={(e) => handleRewardChange(index, 'amount', Number(e.target.value))}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors[`reward-${index}-amount`] ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="25"
                        />
                      </div>
                      {errors[`reward-${index}-amount`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`reward-${index}-amount`]}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={reward.description}
                      onChange={(e) => handleRewardChange(index, 'description', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe what backers will receive..."
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Perks
                    </label>
                    {reward.perks.map((perk, perkIndex) => (
                      <div key={perkIndex} className="flex space-x-2 mb-2">
                        <input
                          type="text"
                          value={perk}
                          onChange={(e) => {
                            const newPerks = [...reward.perks];
                            newPerks[perkIndex] = e.target.value;
                            handleRewardChange(index, 'perks', newPerks);
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="e.g., Founders Wall"
                        />
                        <button
                          onClick={() => {
                            const newPerks = reward.perks.filter((_, i) => i !== perkIndex);
                            handleRewardChange(index, 'perks', newPerks);
                          }}
                          className="px-3 py-2 text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newPerks = [...reward.perks, ''];
                        handleRewardChange(index, 'perks', newPerks);
                      }}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      + Add Perk
                    </button>
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={reward.limited}
                        onChange={(e) => handleRewardChange(index, 'limited', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">Limited quantity</span>
                    </label>
                    
                    {reward.limited && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={reward.quantity}
                          onChange={(e) => handleRewardChange(index, 'quantity', Number(e.target.value))}
                          className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <button
                onClick={addReward}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors"
              >
                <Plus className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <span className="text-gray-600">Add Another Reward</span>
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Campaign</h2>
              <p className="text-gray-600">Review all details before publishing</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{formData.title}</h3>
                  <p className="text-gray-600 mb-2">{formData.subtitle}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {formData.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      ${formData.goal.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formData.duration} days
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600">{formData.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Rewards ({formData.rewards.length})</h4>
                  <div className="space-y-2">
                    {formData.rewards.map((reward, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{reward.title}</p>
                          <p className="text-sm text-gray-600">{reward.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${reward.amount}</p>
                          {reward.limited && (
                            <p className="text-xs text-gray-500">{reward.quantity} available</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < STEPS.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">{STEPS[currentStep].title}</h1>
            <p className="text-gray-600">{STEPS[currentStep].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button
              onClick={nextStep}
              className="btn-primary flex items-center"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="btn-primary flex items-center"
            >
              Publish Campaign
              <CheckCircle className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 